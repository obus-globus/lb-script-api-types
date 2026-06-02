import type { COMException } from '../../../../com/sun/jna/platform/win32/COM/COMException.d.ts'
import type { WbemcliUtil$WmiQuery } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiQuery.d.ts'
import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WmiQueryHandler extends Object {
    static createInstance(): WmiQueryHandler;
    static setInstanceClass(paramarg0: Class<Object>): void;
    constructor()
    readonly comThreading: number;
    // private failedWmiClassNames: string[];
    readonly securityInitialized: boolean;
    readonly wmiTimeout: number;
    getComThreading(): number;
    getWmiTimeout(): number;
    handleComException(arg0: WbemcliUtil$WmiQuery<Object>, arg1: COMException): void;
    initCOM(): boolean;
    initCOM(arg0: number): boolean;
    isSecurityInitialized(): boolean;
    queryWMI(arg0: WbemcliUtil$WmiQuery<T>): WbemcliUtil$WmiResult<T>;
    queryWMI(arg0: WbemcliUtil$WmiQuery<T>, arg1: boolean): WbemcliUtil$WmiResult<T>;
    setWmiTimeout(arg0: number): void;
    switchComThreading(): number;
    unInitCOM(): void;
}