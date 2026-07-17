import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LSPServerAccessor extends Object{
    getOpenFileURI2LangId(): JavaMap<URI, string>;
    getSource(uri: URI): Source;
    sendCustomNotification(method: string, params: Object): void;
}