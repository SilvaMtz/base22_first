import { Component, Prop, State, h } from "@stencil/core";

@Component({
  tag: "floating-menu",
  styleUrl: "floating-menu.css"
})
export class FloatingMenu {
  @Prop() color: string = "#e20177";

  @State() open: string;

  componentWillLoad() {
    this.setValue(this.color);
  }

  setValue(color) {
    this.color = color;
  }

  toggleSlide = () => {
    let menu = document.getElementById("menu");
    let slider = document.getElementById("slider");
    let innerSlider = document.getElementById("inner-slider");

    menu.classList.toggle("toggle");
    menu.classList.toggle("transition");

    slider.classList.toggle("toggle-slider");
    slider.classList.toggle("transition");

    innerSlider.classList.toggle("hide");

    setTimeout(function() {
      menu.classList.toggle("transition");
      slider.classList.toggle("transition");
    }, 350);
  };

  render() {
    return (
      <nav class="color-picker">
        <button
          id="menu"
          class="float hide noselect"
          onClick={() => this.toggleSlide()}
          style={{ backgroundColor: this.color }}
        >
          <i class="chevron" />
        </button>

        <div id="slider">
          <div id="inner-slider" class="hide center" >
            <p>Select one of the options below</p>
            <ul>
              <li><a href="#"><span>Home</span></a></li>
              <li><a href="#"><span>About</span></a></li>
              <li><a href="#"><span>Clients</span></a></li>
              <li><a href="#"><span>Contact</span></a></li>
              <li><a href="#"><span class="far fa-life-ring"></span>Help Center</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
