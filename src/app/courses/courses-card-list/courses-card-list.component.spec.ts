import {
  async,
  ComponentFixture,
  TestBed,
  waitForAsync,
} from "@angular/core/testing";
import { CoursesCardListComponent } from "./courses-card-list.component";
import { CoursesModule } from "../courses.module";
import { COURSES } from "../../../../server/db-data";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { sortCoursesBySeqNo } from "../home/sort-course-by-seq";
import { Course } from "../model/course";
import { setupCourses } from "../common/setup-test-data";

describe("CoursesCardListComponent", () => {
  let component: CoursesCardListComponent;
  let fixture: ComponentFixture<CoursesCardListComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoursesModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CoursesCardListComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should display the course list", () => {
    component.courses = setupCourses(); // initialization of courses from prepared function
    fixture.detectChanges(); // run changeDetection right after init of DOM elements

    const cards = el.queryAll(By.css(".course-card")); // find all elements with this css class

    expect(cards).toBeTruthy("Could not find cards");
    expect(cards.length).toBe(12, "Unexpected number of courses");
  });

  it("should display the first course", () => {
    pending();
  });
});
