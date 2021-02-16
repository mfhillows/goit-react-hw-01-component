import PropTypes from "prop-types";
import s from "./Statistic.module.css";

export default function Statistic({ title = "", stats }) {
  return (
    <section class={s.statistic}>
      <h2 class="title">{title}</h2>

      <ul class={s.statlist}>
        {stats.map((stat) => (
          <li class={s.item}>
            <span class={s.label}>{stat.label}</span>
            <span class={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
