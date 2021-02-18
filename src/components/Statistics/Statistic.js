import PropTypes from "prop-types";
import s from "./Statistic.module.css";

export default function Statistic({ title = "", stats }) {
  return (
    <section className={s.statistic}>
      <h2 className="title">{title}</h2>

      <ul className={s.statlist}>
        {stats.map((stat) => (
          <li className={s.item} key={stat.id}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
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
