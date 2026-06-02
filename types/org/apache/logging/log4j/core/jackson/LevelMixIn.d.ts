import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
export abstract class LevelMixIn extends Object {
    static getLevel(paramname: string): Level;
    constructor()
    name(): string;
}