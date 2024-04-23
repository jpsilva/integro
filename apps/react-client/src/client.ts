import { createClient } from 'integro/dist/client';
import type { App } from "@integro/demo-server";

export const api = createClient<App>("http://localhost:8000");

// export const useCaller = <C extends Caller>(
//   ...[caller, props]: ClientCallerParams<C>
// ): SWRResponse<Awaited<ReturnType<C>>> =>
//   useSWR([caller.pathname, props], () => caller(props));

// export const useClient = <Key extends ClientSlashPath>(
//   ...[key, props]: ClientGetterParams<Key>
// ): SWRResponse<ClientReturnType<Key>> =>
//   useSWR([key, props], () => (client[key] as Function)(props));

// export const useClientMutation = <Key extends ClientSlashPath>(
//   key: Key,
//   ...props: ClientParams<Key>
// ): SWRMutationResponse<ClientReturnType<Key>> =>
//   useSWRMutation([key, props], () => (client[key] as Function)(props));

// export const useClientMutate = () => {
//   const { mutate } = useSWRConfig();

//   return <Key extends ClientSlashPath>(key: Key) =>
//     mutate((k) => Array.isArray(k) && k[0] === key);
// };

// export const createFetcherPair = <C extends Caller>(
//   ...[caller, props]: ClientCallerParams<C>
// ): [[string, typeof props], () => Promise<Awaited<ReturnType<C>>>] => [
//   [caller.pathname, props],
//   () => caller(props),
// ];

// export const createMutator =
//   <C extends Caller>(caller: C) =>
//   (key: string, { arg }: { arg: FirstParam<C> }) =>
//     caller(arg);

// export const createMutatationPair = <C extends Caller>(
//   caller: C
// ): [string, ReturnType<typeof createMutator<C>>] => [
//   caller.pathname,
//   createMutator(caller),
// ];
