import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ThreadContextMap } from '../../../../../org/apache/logging/log4j/spi/ThreadContextMap.d.ts'
export class ThreadContextMapFactory extends Object {
    static createThreadContextMap(): ThreadContextMap;
    static init(): void;
    private constructor()
}