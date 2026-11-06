import PCPCard from "./PCPCard";

export default function PassingChildrenProp() {
  return (
    <div>
      <PCPCard>
        <div className="card-content">
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://react.dev/images/docs/scientists/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </div>
      </PCPCard>
      <PCPCard>
        <div className="card-content">
          <h1>About</h1>
          <p>
            Aklilu Lemma was a distinguished Ethiopian scientist who discovered
            a natural treatment to schistosomiasis.
          </p>
        </div>
      </PCPCard>
    </div>
  );
}
