export default {
  fetchCostumes: () =>
    fetch(`${process.env.REACT_APP_API_URI}/costumes`)
      .then(res => res.json())
      .then(json => json.costumes)
};
