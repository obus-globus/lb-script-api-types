import type { TruffleInstrument } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { TypeHandler } from '../../../../../../com/oracle/truffle/tools/chromeinspector/TypeHandler.d.ts'
import type { TypeHandler$Provider } from '../../../../../../com/oracle/truffle/tools/chromeinspector/TypeHandler$Provider.d.ts'
import type { Enabler } from '../../../../../../com/oracle/truffle/tools/chromeinspector/instrument/Enabler.d.ts'
export class TypeProfileInstrument extends TruffleInstrument implements TypeHandler$Provider, Enabler {
    static ID: string;
    constructor()
    // private env: TruffleInstrument$Env;
    // private th: TypeHandler;
    disable(): void;
    enable(): void;
    getTypeHandler(): TypeHandler;
    onCreate(e: TruffleInstrument$Env): void;
    onDispose(e: TruffleInstrument$Env): void;
}