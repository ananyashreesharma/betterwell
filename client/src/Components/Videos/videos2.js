import React from "react";
// css is in the home css part
import '../../css/navigation.css'
const videos2 = () => {
    return (
        <div className="videos2">
            <div className="ts-wrapper">
                <div className="ts-icon">
                    <img src={homepic} alt="" srcset=""/>
                </div>
            <div>
<CardGroup>

  <Card>
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/02/01/07/57/woman-1172718_1280.jpg" />
    <Card.Body>
      <Card.Title>Anger</Card.Title>
      <Card.Text>
      Books:
      Mindfulness for Anger Management by Stephen Dansiger
      Letting Go of Anger by Ronald Potter
      </Card.Text>
      <Card.Link href="https://youtu.be/EVNNzwHWq78">Video 1</Card.Link>
      <Card.Link href="https://youtu.be/sbVBsrNnBy8">Video 2</Card.Link>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">May All your vibes say I got this</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/02/01/07/57/woman-1172718_1280.jpg" />
    <Card.Body>
      <Card.Title>Self Harm</Card.Title>
      <Card.Text>
      Books:
      Freedom from Self-Harm  by Kim L Gratz
      The Prison Doctor by Amanda Brown
      </Card.Text>
    </Card.Body>
    <Card.Link href="https://youtu.be/OY5akjDzm18">Video 1</Card.Link>
    <Card.Link href="https://youtu.be/caXVnPfL5nU">Video 2</Card.Link>
    <Card.Footer>
      <small className="text-muted">May All your vibes say I got this</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/02/01/07/57/woman-1172718_1280.jpg" />
    <Card.Body>
      <Card.Title>Sucidal Feeling</Card.Title>
      <Card.Text>
      Books:
       The Recovery Letters by Olivia Sangan and James Withey
       The Astonishing color of After by Emily X.R Pan
      
      </Card.Text>
    </Card.Body>
    <Card.Link href="https://youtu.be/dn7EXTVJs6I">Video 1</Card.Link>
    <Card.Link href="https://youtu.be/GJ58hvOIpp4">Video 2</Card.Link>
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

export default videos2;