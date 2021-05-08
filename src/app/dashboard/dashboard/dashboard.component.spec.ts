import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {DashboardComponent} from "./dashboard.component";
import {DashboardHeroComponent} from "./dashboard-hero/dashboard-hero.component";
import {CommonModule, Location} from "@angular/common";
import {HeroService} from "../../service/hero.service";
import createSpyObj = jasmine.createSpyObj;
import {Router, Routes} from "@angular/router";
import {Hero} from "../../model/hero";
import {of} from "rxjs";
import {BrowserModule} from "@angular/platform-browser";
import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {DashboardModule} from "./dashboard.module";


describe("DashboardComponent", () => {
  let fixture: ComponentFixture<DashboardComponent>
  let component: DashboardComponent
  let heroService
  let router:Router



  beforeEach(waitForAsync(() => {
    const heroServiceSpy = createSpyObj('HeroService', ['getAllHeros'])
    const routerSpy = createSpyObj('Router', ['navigateByUrl'])
    TestBed.configureTestingModule({
      providers: [
        {provide: HeroService, useValue: heroServiceSpy},
        {provide: Router ,useValue: routerSpy}
      ],
      imports: [
        CommonModule,
        BrowserModule,
        DashboardModule,

      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(DashboardComponent)
      component = fixture.componentInstance
      router=TestBed.inject(Router)
      heroService = TestBed.inject(HeroService)
      heroService.getAllHeros.and.returnValue(of(getTestHeroes()))

    })
  }))

  // it('should create component', () => {
  //   fixture.detectChanges()
  //   expect(component).toBeTruthy()
  //
  // });
  it('should NOT have heroes before ngOnInit', () => {
    component.heros$.subscribe(heros => expect(heros.length)
      .toBe(0, 'should not have heroes before ngOnInit'))

  });

  describe('after get dashboard heroes', () => {
    it('should HAVE heroes', () => {
      fixture.detectChanges()
      component.heros$.subscribe(heros => expect(heros.length)
        .toBeGreaterThan(0, 'should have heros'))
    });
  })

  it('should display heros', waitForAsync(() => {
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      const heros = fixture.nativeElement.querySelectorAll('app-dashboard-hero')
      expect(heros.length).toBe(6, 'should display 6 heros')
    })
  }));
  xit('should tell router to navigate when hero clicked ', waitForAsync(() => {
    fixture.detectChanges()
    fixture.whenStable().then(()=>{
      component.heros$.subscribe((heros) => {
        const hero = fixture.nativeElement.querySelector('app-dashboard-hero')
        click(hero)
        const spy = router.navigateByUrl as jasmine.Spy;
        const navArgs = spy.calls.first().args[0];
        const id = heros[0].id;
        expect(navArgs).toBe('/heroes/' + id)
      })
    })
  }));
})


function getTestHeroes(): Hero[] {
  return [
    {id: 41, name: 'Bob'},
    {id: 42, name: 'Carol'},
    {id: 43, name: 'Ted'},
    {id: 44, name: 'Alice'},
    {id: 45, name: 'Speedy'},
    {id: 46, name: 'Stealthy'}
  ];
}

const ButtonClickEvents = {
  left: {button: 0},
  right: {button: 2}
};

export function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}
