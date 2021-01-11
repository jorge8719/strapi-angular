import { AfterViewInit, Directive, TemplateRef, ViewContainerRef, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { createPopper, Instance, Modifier } from '@popperjs/core';

@Directive({
  selector: '[appDemo]'
})

export class DemoDirective implements AfterViewInit{


  @Input() appDemo!: TemplateRef<any>;

  private popperInstance: Instance | null = null;

  constructor(
    private el: ElementRef,
    private template : TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private readonly renderer: Renderer2
  ) {

  }

  createPopperInstance() {
    // return createPopper(this.el.nativeElement, this.el.nativeElement)
  }

  @HostListener('click', ['$event.target'])
  onClick(): void {
    console.log('Create Instance')
  }


  ngAfterViewInit(): void {
    console.log('init')

    let view = this.viewContainer.createEmbeddedView(this.template);
    console.log('view', view)


    const viewRef = this.viewContainer.createEmbeddedView(this.appDemo);
     console.log('template ref', viewRef.rootNodes[0])

     //this.popperInstance = createPopper(this.el.nativeElement, viewRef.rootNodes[0])

  }

}

