import React, { useState } from 'react';
import { User } from '../types/User';
import classNames from 'classnames';

export const UserSelector: React.FC<{
  users: User[];
  activeUser: User | null;
  setActiveUser: (user: User | null) => void;
}> = ({ users, activeUser, setActiveUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-cy="UserSelector" className="dropdown is-active">
      <div className="dropdown-trigger">
        <button
          type="button"
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setIsOpen(false)}
        >
          <span>{activeUser?.name || `Choose a user`}</span>

          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
      {isOpen && (
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {users.map(user => (
              <a
                href={`#user-${user.id}`}
                className={classNames('dropdown-item', {
                  'is-active': user.id === activeUser?.id,
                })}
                key={user.id}
                onMouseDown={() => {
                  setIsOpen(false);
                  setActiveUser(user);
                }}
              >
                {user.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
