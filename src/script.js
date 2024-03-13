import ContentTickerFront from './Components/ContentTicker/ContentTickerFront/ContentTickerFront';
import Style from './Components/Style/Style';
import './style.scss';
import { createRoot } from 'react-dom/client';
// Block Name
function FrontEnd({attributes}) {
	return (
		<>
			<Style attributes={attributes} />
			<ContentTickerFront attributes={attributes}/>
    </>
  );
}

const container = document.querySelectorAll('.cttk-content-ticker');
container?.forEach(ele => {
	const attributes = JSON.parse(ele.dataset.attributes);
	const root = createRoot(ele);
	root.render(<FrontEnd attributes={attributes} />);
	ele?.removeAttribute("data-attributes")
})