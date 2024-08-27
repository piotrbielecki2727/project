export const LettersRegex =
  /^((?:(?:[a-zA-Z]+)(?:-(?:[a-zA-Z]+))+)|(?:[a-zA-Z]+))$/gm

export const EmailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm

export const PasswordRegex =
  /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/gm
