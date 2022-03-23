import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostsDialogComponent } from './create-posts-dialog.component';

describe('CreatePostsDialogComponent', () => {
  let component: CreatePostsDialogComponent;
  let fixture: ComponentFixture<CreatePostsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
