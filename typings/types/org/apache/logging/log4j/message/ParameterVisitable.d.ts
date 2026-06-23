import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParameterConsumer } from '../../../../../org/apache/logging/log4j/message/ParameterConsumer.d.ts'
export interface ParameterVisitable extends Object{
    forEachParameter<S extends unknown>(action: ParameterConsumer<S>, state: S): void;
}