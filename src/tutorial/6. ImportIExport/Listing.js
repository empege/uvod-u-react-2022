import Nesto from "./Article";
import { articles as nesto } from "./data"

function Listing() {
  return (
    <section className="o-listing">
      {nesto.map((article, index) => (
        <Nesto key={article.id} {...article} />
      ))}
    </section>
  );
}

export const namedExport1 = 'Ovo je named export, mozemo da ga imamo koliko hocemo'
export const namedExport2 = 'Ovo je named export, mozemo da ga imamo koliko hocemo'
export const namedExport3 = 'Ovo je named export, mozemo da ga imamo koliko hocemo'

export default Listing
