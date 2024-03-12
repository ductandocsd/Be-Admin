import { useRoutes } from "react-router-dom";
import FooterCpn from "../../components/_inc_footer";
import HeaderCpn from "../../components/_inc_header";

import {routes} from "../../router/router";
import {Provider} from "react-redux";
import {store} from "../../store/Store";
import Loading from "../../components/loading/loading";

function AppMaster()
{
    const routeConfig = useRoutes(routes());
    return (
        <Provider store={store}>
			<Loading/>
            <HeaderCpn />
                {routeConfig}
            <FooterCpn />
        </Provider>
    )
}

export default AppMaster;
