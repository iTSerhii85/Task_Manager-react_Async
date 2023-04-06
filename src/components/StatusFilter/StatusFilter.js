import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";

import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "redux/constants";
import { getStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/filtersSlice";
import { deleteOlCompleted } from "redux/tasksSlice";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
        </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
        </Button>
        <Button
        onClick={() => dispatch(deleteOlCompleted())}
      >
        Delete ol completed
        </Button>
    </div>
  );
};
