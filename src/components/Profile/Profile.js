import PropTypes from "prop-types";
import s from "./Profile.module.css";

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div class={s.profile}>
      <div class="description">
        <img src={avatar} alt="Аватар пользователя" class={s.avatar} />
        <p class={s.name}>{name}</p>
        <p class={s.tag}>@{tag}</p>
        <p class={s.location}>{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
