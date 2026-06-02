import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MessageLevel } from '../../../../../../../net/caffeinemc/mods/sodium/client/console/message/MessageLevel.d.ts'
export class Message extends Record {
    // private duration: number;
    // private level: MessageLevel;
    // private text: string;
    // private translated: boolean;
    duration(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    level(): MessageLevel;
    text(): string;
    toString(): string;
    translated(): boolean;
}