import type { Object } from '../../java/lang/Object.d.ts'
export class GlobalConfig extends Object {
    static OSHI_NETWORK_FILESYSTEM_TYPES: string;
    static OSHI_OS_LINUX_ALLOWUDEV: string;
    static OSHI_OS_LINUX_PROCFS_LOGWARNING: string;
    static OSHI_OS_MAC_SYSCTL_LOGWARNING: string;
    static OSHI_OS_SOLARIS_ALLOWKSTAT2: string;
    static OSHI_OS_UNIX_WHOCOMMAND: string;
    static OSHI_OS_WINDOWS_COMMANDLINE_BATCH: string;
    static OSHI_OS_WINDOWS_CPU_UTILITY: string;
    static OSHI_OS_WINDOWS_EVENTLOG: string;
    static OSHI_OS_WINDOWS_HKEYPERFDATA: string;
    static OSHI_OS_WINDOWS_LEGACY_SYSTEM_COUNTERS: string;
    static OSHI_OS_WINDOWS_LOADAVERAGE: string;
    static OSHI_OS_WINDOWS_PERFDISK_DIABLED: string;
    static OSHI_OS_WINDOWS_PERFOS_DIABLED: string;
    static OSHI_OS_WINDOWS_PERFPROC_DIABLED: string;
    static OSHI_OS_WINDOWS_PERF_DISABLE_ALL_ON_FAILURE: string;
    static OSHI_OS_WINDOWS_PROCSTATE_SUSPENDED: string;
    static OSHI_PSEUDO_FILESYSTEM_TYPES: string;
    static OSHI_UTIL_DEV_PATH: string;
    static OSHI_UTIL_MEMOIZER_EXPIRATION: string;
    static OSHI_UTIL_PROC_PATH: string;
    static OSHI_UTIL_SYS_PATH: string;
    static OSHI_UTIL_WMI_TIMEOUT: string;
    static clear(): void;
    static get(paramarg0: string, paramarg1: boolean): boolean;
    static get(paramarg0: string, paramarg1: number): number;
    static get(paramarg0: string, paramarg1: number): number;
    static get(paramarg0: string): string;
    static get(paramarg0: string, paramarg1: string): string;
    static load(paramarg0: Properties): void;
    static remove(paramarg0: string): void;
    static set(paramarg0: string, paramarg1: Object): void;
    private constructor()
}