import type { AppEvent } from '../../../java/awt/desktop/AppEvent.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
export class OpenURIEvent extends AppEvent {
    constructor(arg0: URI)
    // private uri: URI;
    getURI(): URI;
}