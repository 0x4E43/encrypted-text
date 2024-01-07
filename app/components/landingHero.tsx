import CreateWebSearch from "./createWebSearch";

const LandingHero = () => {
  return (
    <>
      <div className="hero m-10 bg-base-100 rounded-xl shadow-md mb-10 pb-10 pt-10 w-3/4">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Lock and Load</h1>
            <h2 className="text-xl font-bold">Encrypt Your Thoughts</h2>
            <p className="py-6">
              Thoughts Unleashed, Secrets Sealed: Encrypt and Store Your Notes
              with Confidence in Our Secure Vault.
            </p>
            <CreateWebSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHero;
