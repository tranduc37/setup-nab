export interface ChildMenu {
  title: string
  link: string,
  pathMatch: string
}

export interface  NbMenuItem {
  title: string,
  icon: string,
  link: string,
  children: ChildMenu[],
  home: boolean,
}
