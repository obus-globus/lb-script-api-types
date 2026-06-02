import type { Gson } from '../../../com/google/gson/Gson.d.ts'
import type { LoginProcessHandler } from '../../../de/florianreuth/classic4j/api/LoginProcessHandler.d.ts'
import type { CCAccount } from '../../../de/florianreuth/classic4j/model/classicube/account/CCAccount.d.ts'
import type { CCServerList } from '../../../de/florianreuth/classic4j/model/classicube/server/CCServerList.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ClassiCubeHandler extends Object {
    static AUTHENTICATION_URI: URI;
    static CLASSICUBE_ROOT_URI: URI;
    static GSON: Gson;
    static SERVER_INFO_URI: URI;
    static SERVER_LIST_INFO_URI: URI;
    static requestAuthentication(paramarg0: CCAccount, paramarg1: string, paramarg2: LoginProcessHandler): void;
    static requestServerInfo(paramarg0: CCAccount, paramarg1: string, paramarg2: (param0: CCServerList) => void): void;
    static requestServerInfo(paramarg0: CCAccount, paramarg1: string, paramarg2: (param0: CCServerList) => void, paramarg3: (param0: Throwable) => void): void;
    static requestServerInfo(paramarg0: CCAccount, paramarg1: string[], paramarg2: (param0: CCServerList) => void): void;
    static requestServerInfo(paramarg0: CCAccount, paramarg1: string[], paramarg2: (param0: CCServerList) => void, paramarg3: (param0: Throwable) => void): void;
    static requestServerList(paramarg0: CCAccount, paramarg1: (param0: CCServerList) => void): void;
    static requestServerList(paramarg0: CCAccount, paramarg1: (param0: CCServerList) => void, paramarg2: (param0: Throwable) => void): void;
    constructor()
}