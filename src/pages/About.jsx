import Me from '../assets/me.png'

export default function About() {
    return (
      <div>
        <h1 className="d-flex justify-content-start m-1">Hi! I'm Libby 👋</h1>
        {/* <div className="d-flex justify-content-center">
          <img src={Me} className="img-thumbnail rounded-circle m-3" alt="me"/>
        </div> */}
        <p className="mt-5 pt-5">
          I'm a full-stack web developer based in Austin, TX. As a recent coding bootcamp graduate who's discovered the joys of coding, I'm eager to dive headfirst into the tech world. With a solid grasp of front-end and back-end development, I specialize in creating visually stunning and interactive websites with a fully functioning, supportive backend.
        </p>
        <br></br>
        <p>Before transitioning into coding, I spent several years in social media marketing and digital media. My experience in crafting engaging content and analyzing user data has honed my analytical, problem-solving, and creative skills, which I now apply to coding projects. I've seen firsthand the transformative power of technology in shaping digital experiences, and I'm excited to be part of that innovation.</p>
        <br></br>
        <p>When I'm not furthering my coding knowledge or working on my latest project, you'll find me training for my first 5K, perfecting the ultimate chocolate chip cookie recipe, or immersed in my latest video game obsession.</p>
        <br></br>
        <p>I'm thrilled about the opportunities ahead and eager to make my mark in the world of web development. If you'd like to connect (or share your favorite cookie recipe), feel free to send me a message or email me at <a href="mailto:lcyou95@gmail.com" id="email">lcyou95@gmail.com!</ a></p>
      </div>
    );
  }
  