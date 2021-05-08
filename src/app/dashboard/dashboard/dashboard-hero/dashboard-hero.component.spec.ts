import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {DashboardHeroComponent} from "./dashboard-hero.component";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {Hero} from "../../../model/hero";
import {click} from "../dashboard.component.spec";

describe('DashboardHeroComponent', () => {
  let fixture: ComponentFixture<DashboardHeroComponent>;
  let component: DashboardHeroComponent
  let debugElement: DebugElement
  const expectedHero = {id: 42, name: 'Test Name'};

  beforeEach(waitForAsync(() => {
    return TestBed.configureTestingModule({
      declarations: [DashboardHeroComponent]
    }).compileComponents().then(() => {
        fixture = TestBed.createComponent(DashboardHeroComponent)
        component = fixture.componentInstance
        debugElement = fixture.debugElement
      }
    );
  }))
  it('should display hero name with uppercase', () => {
    component.hero = expectedHero
    fixture.detectChanges()
    let div = debugElement.query(By.css('.hero'))
    expect(div.nativeElement.textContent).toContain(expectedHero.name.toUpperCase())
  });
  it('should raise selected event when clicked (element.click)', () => {
    let selectedHero: Hero;
    component.hero=expectedHero
    fixture.detectChanges()
    component.selected.subscribe((hero: Hero) => selectedHero = hero);
    let div = debugElement.query(By.css('.hero'))
    click(div)
    expect(selectedHero).toBe(expectedHero);
  });

})
