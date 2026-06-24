import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Screen } from '../../../net/minecraft/client/gui/screens/Screen.d.ts'
export class MouseHandler$LastClick extends Record {
    constructor(time: number, screen: Screen)
    // private screen: Screen;
    // private time: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    screen(): Screen;
    time(): number;
    toString(): string;
}