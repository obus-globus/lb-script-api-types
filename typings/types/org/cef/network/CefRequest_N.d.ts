import type { JavaMap } from '../../../JavaMap.d.ts'
import type { CefNative } from '../../../org/cef/callback/CefNative.d.ts'
import type { CefPostData } from '../../../org/cef/network/CefPostData.d.ts'
import type { CefRequest } from '../../../org/cef/network/CefRequest.d.ts'
import type { CefRequest$ReferrerPolicy } from '../../../org/cef/network/CefRequest$ReferrerPolicy.d.ts'
import type { CefRequest$ResourceType } from '../../../org/cef/network/CefRequest$ResourceType.d.ts'
import type { CefRequest$TransitionType } from '../../../org/cef/network/CefRequest$TransitionType.d.ts'
export class CefRequest_N extends CefRequest implements CefNative {
    static create(): CefRequest;
    static createNative(): CefRequest;
    constructor()
    // private N_CefHandle: number;
    // private N_Dispose(arg0: number): void;
    // private N_GetFirstPartyForCookies(arg0: number): string;
    // private N_GetFlags(arg0: number): number;
    // private N_GetHeaderByName(arg0: number, arg1: string): string;
    // private N_GetHeaderMap(arg0: number, arg1: JavaMap<string, string>): void;
    // private N_GetIdentifier(arg0: number): number;
    // private N_GetMethod(arg0: number): string;
    // private N_GetPostData(arg0: number): CefPostData;
    // private N_GetReferrerPolicy(arg0: number): CefRequest$ReferrerPolicy;
    // private N_GetReferrerURL(arg0: number): string;
    // private N_GetResourceType(arg0: number): CefRequest$ResourceType;
    // private N_GetTransitionType(arg0: number): CefRequest$TransitionType;
    // private N_GetURL(arg0: number): string;
    // private N_IsReadOnly(arg0: number): boolean;
    // private N_Set(arg0: number, arg1: string, arg2: string, arg3: CefPostData, arg4: JavaMap<string, string>): void;
    // private N_SetFirstPartyForCookies(arg0: number, arg1: string): void;
    // private N_SetFlags(arg0: number, arg1: number): void;
    // private N_SetHeaderByName(arg0: number, arg1: string, arg2: string, arg3: boolean): void;
    // private N_SetHeaderMap(arg0: number, arg1: JavaMap<string, string>): void;
    // private N_SetMethod(arg0: number, arg1: string): void;
    // private N_SetPostData(arg0: number, arg1: CefPostData): void;
    // private N_SetReferrer(arg0: number, arg1: string, arg2: CefRequest$ReferrerPolicy): void;
    // private N_SetURL(arg0: number, arg1: string): void;
    dispose(): void;
    getFirstPartyForCookies(): string;
    getFlags(): number;
    getHeaderByName(arg0: string): string;
    getHeaderMap(arg0: JavaMap<string, string>): void;
    getIdentifier(): number;
    getMethod(): string;
    getNativeRef(arg0: string): number;
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
    setNativeRef(arg0: string, arg1: number): void;
    setPostData(arg0: CefPostData): void;
    setReferrer(arg0: string, arg1: CefRequest$ReferrerPolicy): void;
    setURL(arg0: string): void;
}