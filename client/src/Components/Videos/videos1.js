import React from "react";
// css is in the home css part
import '../../css/navigation.css'
const videos1 = () => {
    return (
        <div className="videos1">
            <div className="ts-wrapper">
                <div className="ts-icon">
                    <img src={homepic} alt="" srcset=""/>
                </div>
            <div>
<CardGroup>

  <Card>
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/02/01/07/57/woman-1172718_1280.jpg" />
    <Card.Body>
      <Card.Title>Depression</Card.Title>
      <Card.Text>
      Books:
      FIRST, WE MAKE THE BEAST BEAUTIFUL BY SARAH WILSON
      FEELING GOOD: THE NEW MOOD THERAPY BY DAVID BURNS
      </Card.Text>
      <Card.Link href="https://youtu.be/ssKSfQmIoLE">Video 1</Card.Link>
      <Card.Link href="https://youtu.be/8Su5VtKeXU8">Video 2</Card.Link>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">May All your vibes say I got this</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/02/01/07/57/woman-1172718_1280.jpg" />
    <Card.Body>
      <Card.Title>Panic Disorders</Card.Title>
      <Card.Text>
      Books:
       A LIFE LESS ANXIOUS BY STEVE PAVILANIS
       MIND OVER MOOD bY CHRISTINE A.PADESKY
      </Card.Text>
    </Card.Body>
    <Card.Link href="https://youtu.be/QtG_bGD9DM4">Video 1</Card.Link>
    <Card.Link href="https://youtu.be/6n8i7ua0mSw">Video 2</Card.Link>
    <Card.Footer>
      <small className="text-muted">May All your vibes say I got this</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/02/01/07/57/woman-1172718_1280.jpg" />
    <Card.Body>
      <Card.Title>Insomnia</Card.Title>
      <Card.Text>
      Books:
      WHY WE SLEEP: UNLOCKING THE POWER OF SLEEP AND DREAMS BY MATTHEW WALKER
      SLEEPYHEAD: THE NEUROSCIENCE OF A GOOD NIGHT’S REST BY HENRY NICHOLLS
      THE LITTLE BOOK OF SLEEP: THE ART OF NATURAL SLEEP BY DR. NERINA RAMLAKHAN
      
      </Card.Text>
    </Card.Body>
    <Card.Link href="https://youtu.be/QaaoH-myH0A">Video 1</Card.Link>
    <Card.Link href="https://youtu.be/PB9q7bRA1I8">Video 2</Card.Link>
    <Card.Footer>
      <small className="text-muted">May all your vibes say I got this.</small>
    </Card.Footer>
  </Card>

</CardGroup>
</div>
        
                

            </div>
        </div>
    )
}

export default videos1;