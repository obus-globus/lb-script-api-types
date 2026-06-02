import type { WbemcliUtil$WmiResult } from '../../../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class WbemcliUtil$WmiQuery<T extends Enum<T>> extends Object {
    constructor(arg0: string, arg1: Class<T>)
    constructor(arg0: string, arg1: string, arg2: Class<T>)
    readonly nameSpace: string;
    readonly propertyEnum: Class<T>;
    readonly wmiClassName: string;
    execute(): WbemcliUtil$WmiResult<T>;
    execute(arg0: number): WbemcliUtil$WmiResult<T>;
    getNameSpace(): string;
    getPropertyEnum(): Class<T>;
    getWmiClassName(): string;
    setNameSpace(arg0: string): void;
    setWmiClassName(arg0: string): void;
}