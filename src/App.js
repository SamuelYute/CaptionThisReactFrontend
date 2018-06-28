import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { 
    HashRouter as Router,
    Route,
} from 'react-router-dom';

import RandomsSection from './containers/randoms.js';
import BrieflySection from './components/briefly.js';
import WhatsNewSection from './components/whatsnew.js';
import MeSection from './components/me.js';
import PictureViewer from './containers/pictureViewer.js';

registerServiceWorker();

const App = () => (
                <Router>
                    <div>
                        <Route exact path="/"  component={RandomsSection}/>
                        <Route path="/briefly"  component={BrieflySection}/>
                        <Route path="/whats-new"  component={WhatsNewSection}/>
                        <Route path="/me"  component={MeSection}/>
                        <Route path="/pictures/:id" component={PictureViewer}/>
                    </div>
                </Router> 
            );

export default App;

