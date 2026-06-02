import type { TypeHandler } from '../../../../../com/oracle/truffle/tools/chromeinspector/TypeHandler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TypeHandler$Provider extends Object{
    getTypeHandler(): TypeHandler;
}