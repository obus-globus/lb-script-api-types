import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefPostData } from '../../../org/cef/network/CefPostData.d.ts'
import type { CefRequest$ReferrerPolicy } from '../../../org/cef/network/CefRequest$ReferrerPolicy.d.ts'
import type { CefRequest$ResourceType } from '../../../org/cef/network/CefRequest$ResourceType.d.ts'
import type { CefRequest$TransitionType } from '../../../org/cef/network/CefRequest$TransitionType.d.ts'
export abstract class CefRequest extends Object {
    static create(): CefRequest;
    constructor()
    dispose(): void;
    finalize(): void;
    getFirstPartyForCookies(): string;
    getFlags(): number;
    getHeaderByName(arg0: string): string;
    getHeaderMap(arg0: JavaMap<string, string>): void;
    getIdentifier(): number;
    getMethod(): string;
    getPostData(): CefPostData;
    getReferrerPolicy(): CefRequest$ReferrerPolicy;
    getReferrerURL(): string;
    getResourceType(): CefRequest$ResourceType;
    getTransitionType(): CefRequest$TransitionType;
    getURL(): string;
    isReadOnly(): boolean;
    set(arg0: string, arg1: string, arg2: CefPostData, arg3: JavaMap<string, string>): void;
    setFirstPartyForCookies(arg0: string): void;
    setFlags(arg0: number): void;
    setHeaderByName(arg0: string, arg1: string, arg2: boolean): void;
    setHeaderMap(arg0: JavaMap<string, string>): void;
    setMethod(arg0: string): void;
    setPostData(arg0: CefPostData): void;
    setReferrer(arg0: string, arg1: CefRequest$ReferrerPolicy): void;
    setURL(arg0: string): void;
    toString(): string;
}