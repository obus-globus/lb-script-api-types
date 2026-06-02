import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ChangeSetResults extends Object {
    constructor()
    readonly addedFromChangeSet: string[];
    readonly addedFromStream: string[];
    readonly deleted: string[];
    addedFromChangeSet(arg0: string): void;
    addedFromStream(arg0: string): void;
    deleted(arg0: string): void;
    getAddedFromChangeSet(): string[];
    getAddedFromStream(): string[];
    getDeleted(): string[];
    hasBeenAdded(arg0: string): boolean;
}