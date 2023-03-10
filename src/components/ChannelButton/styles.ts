import styled from 'styled-components'
import { Hashtag } from 'styled-icons/heroicons-outline'
import { PersonAdd, Settings } from 'styled-icons/material'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;
  transition: background-color 0.2s;

  cursor: pointer;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    color: var(--senary);
    margin-left: 5px;
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }
  }
`
export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`

export const InviteIcon = styled(PersonAdd)`
  height: 16px;
  width: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`

export const SettingsIcon = styled(Settings)`
  height: 16px;
  width: 16px;

  margin-left: 4px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`
