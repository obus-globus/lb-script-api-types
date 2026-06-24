import type { WorldTemplate } from '../../../../com/mojang/realmsclient/dto/WorldTemplate.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WorldTemplatePaginatedList extends Record {
    static parse(paramjson: string): WorldTemplatePaginatedList;
    constructor(size: number)
    constructor(templates: WorldTemplate[], page: number, size: number, total: number)
    // private page: number;
    // private size: number;
    // private templates: WorldTemplate[];
    // private total: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isLastPage(): boolean;
    page(): number;
    size(): number;
    templates(): WorldTemplate[];
    toString(): string;
    total(): number;
}