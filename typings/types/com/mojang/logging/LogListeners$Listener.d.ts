import type { Object } from '../../../java/lang/Object.d.ts'
import type { Level } from '../../../org/slf4j/event/Level.d.ts'
export interface LogListeners$Listener extends Object{
    accept(arg0: string, arg1: Level): void;
}