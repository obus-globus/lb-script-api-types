import type { JoinServerInterface } from '../../../de/florianreuth/classic4j/api/JoinServerInterface.d.ts'
import type { BCServerList } from '../../../de/florianreuth/classic4j/model/betacraft/BCServerList.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class BetaCraftHandler extends Object {
    static BETACRAFT_ROOT_URI: URI;
    static SERVER_LIST_URI: URI;
    static authenticate(paramarg0: JoinServerInterface): void;
    static authenticate(paramarg0: JoinServerInterface, paramarg1: (param0: Throwable) => void): void;
    static requestServerList(paramarg0: (param0: BCServerList) => void): void;
    static requestServerList(paramarg0: (param0: BCServerList) => void, paramarg1: (param0: Throwable) => void): void;
    constructor()
}