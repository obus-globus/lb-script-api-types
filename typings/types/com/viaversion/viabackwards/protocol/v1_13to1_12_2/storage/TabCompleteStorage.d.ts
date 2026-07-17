import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TabCompleteStorage extends Object implements StorableObject {
    constructor()
    // private commands: string[];
    readonly lastAssumeCommand: boolean;
    // private usernames: JavaMap<UUID, string>;
    commands(): string[];
    isLastAssumeCommand(): boolean;
    lastId(): number;
    lastRequest(): string;
    onRemove(): void;
    setLastAssumeCommand(arg0: boolean): void;
    setLastId(arg0: number): void;
    setLastRequest(arg0: string): void;
    usernames(): JavaMap<UUID, string>;
}