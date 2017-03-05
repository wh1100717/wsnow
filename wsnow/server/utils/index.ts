export function std_output(status: string, info: string = "", data: any = []) {
  return {
    status: status,
    info: info,
    data: data
  }
}
