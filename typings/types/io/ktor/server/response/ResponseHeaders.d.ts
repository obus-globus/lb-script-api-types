import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ResponseHeaders extends Object {
    constructor()
    // private managedByEngineHeaders: string[];
    // private /*not mapped: */ getManagedByEngineHeaders(): string[];
    allValues(): Headers;
    append(name: string, value: string, safeOnly: boolean): void;
    contains(name: string): boolean;
    protected engineAppendHeader(name: string, value: string): void;
    get(name: string): string | null;
    protected getEngineHeaderNames(): string[];
    protected getEngineHeaderValues(name: string): string[];
    values(name: string): string[];
}