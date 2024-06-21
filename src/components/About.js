import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
          laoreet lacus, eu accumsan tellus. Praesent purus tellus, egestas
          vitae volutpat a, imperdiet vel tellus. Nam semper congue velit nec
          suscipit. Donec mattis massa at laoreet sollicitudin. Quisque commodo
          dolor in ultrices mollis. Praesent malesuada porttitor mauris, sit
          amet sollicitudin diam maximus at. Aenean pulvinar feugiat orci eget
          bibendum. Phasellus nisi urna, fermentum id ante id, congue elementum
          felis. Integer diam tortor, congue a mattis eu, maximus in quam.
          Nullam tristique et turpis id condimentum. Vivamus in quam et tortor
          mollis malesuada in quis eros. Cras hendrerit a tortor vitae auctor.
          Cras faucibus dictum porta. Vivamus vehicula condimentum lorem, at
          porta ante pulvinar vitae. Nullam nec nulla eu nulla condimentum
          aliquam eu sed felis. Morbi consequat diam leo. In blandit, est non
          pharetra porta, quam neque accumsan est, vel bibendum mi mauris nec
          metus. Phasellus aliquet, risus quis convallis tristique, nisi ipsum
          bibendum ex, non rhoncus ante leo id lorem. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Mauris lobortis feugiat purus,
          sed eleifend eros mollis vel. Vestibulum sed commodo ligula. Aliquam
          non accumsan erat. Pellentesque eget metus porttitor, fringilla odio
          id, malesuada odio. Suspendisse maximus diam lectus, ut ultrices neque
          consequat vel. Donec fermentum venenatis neque, lacinia bibendum orci
          finibus mattis. Etiam varius et nibh vitae interdum. Aliquam sit amet
          tortor lorem. Phasellus sit amet suscipit sem, vitae aliquam lorem.
          Sed eu odio posuere, blandit mauris non, euismod urna. Etiam maximus
          lacinia tempus. Cras lobortis dolor a urna posuere, vel laoreet purus
          consectetur. Donec venenatis, velit at finibus luctus, mi massa ornare
          urna, quis aliquam enim lorem vel ipsum. Proin tristique varius enim,
          at blandit justo malesuada eu. Nullam fringilla, enim ac tempus
          molestie, massa est sagittis augue, id interdum eros mi non lectus.
        </p>
      </div>
    </div>
  );
}

export default About;
