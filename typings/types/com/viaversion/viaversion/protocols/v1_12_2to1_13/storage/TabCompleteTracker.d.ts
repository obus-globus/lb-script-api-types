import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TabCompleteTracker extends Object implements StorableObject {
    constructor()
    readonly input: string;
    readonly lastTabComplete: string;
    readonly timeToSend: number;
    readonly transactionId: number;
    getInput(): string;
    getLastTabComplete(): string;
    getTimeToSend(): number;
    getTransactionId(): number;
    onRemove(): void;
    sendPacketToServer(arg0: UserConnection): void;
    setInput(arg0: string): void;
    setLastTabComplete(arg0: string): void;
    setTimeToSend(arg0: number): void;
    setTransactionId(arg0: number): void;
}