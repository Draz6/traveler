import RoomIcon from "@mui/icons-material/Room";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "../styles/Trips.css";

export default function Card(props) {
  const { pic, name, category, price, city, rating } = props;

  return (
    <>
      <div id="userCard">
        <img src={pic} alt="user-photo" />
        <h2>{name}</h2>
        <span className="brand">
          <RoomIcon className="icon1" sx={{ fontSize: 15 }} /> {city}
        </span>

        <div className="rating">
          <Stack spacing={1}>
            <Rating
              name="half-rating"
              defaultValue={rating}
              precision={0.5}
              size="small"
            />
          </Stack>
        </div>
        <div className="category">{category}</div>
        <h3 className="price">{price}</h3>
      </div>
    </>
  );
}
