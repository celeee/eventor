import { Link } from "react-router-dom";
import { Button, Icon, Item, Label, List, Segment } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { format } from "date-fns";
import { deleteEventInFirestore } from "../../../app/services/firebaseService";

function EventListItem({ event }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>
                Hosted by{" "}
                <Link to={`/profile/${event.hostUid}`}>{event.hostedBy}</Link>
              </Item.Description>
              {event.isCancelled && (
                <Label
                  style={{ top: "-40px" }}
                  ribbon="right"
                  color="red"
                  content="This event has been cancelled"
                />
              )}
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment>
        <span>
          <Icon name="clock" />{" "}
          {format(new Date(event.date), "MMMM d, yyyy h:mm a")}
          <Icon name="marker" /> {event.venue}
        </span>
      </Segment>

      <Segment>
        <List horizontal>
          {event.attendees.map(attendee => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>

      <Segment clearing>
        <div>{event.description}</div>

        <Button
          color="red"
          floated="right"
          content="Delete"
          onClick={() => deleteEventInFirestore(event.id)}
        />
        <Button
          color="teal"
          floated="right"
          content="View"
          as={Link}
          to={`${event.id}`}
        />
      </Segment>
    </Segment.Group>
  );
}

export default EventListItem;
