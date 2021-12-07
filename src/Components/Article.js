const Article = ({ title, des }) => {
  return (
    <div className="">
      <div className="mt-20 Sp24 sm-Sp12">{title}</div>
      <div className="mt-10 Inter18 font-grey-light sm-Inter9" style={{lineHeight:'31px'}}>{des}</div>
    </div>
  );
};

export default Article;
