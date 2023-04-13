import PropTypes from 'prop-types';
import { ContactItemLi, ContactItemButton } from './ContactItem.styled';

const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <ContactItemLi>
      <span>
        {name}: {number}
      </span>
      <ContactItemButton type="button" onClick={() => deleteContact(id)}>
        Delete
      </ContactItemButton>
    </ContactItemLi>
  );
};
export default ContactItem;

ContactItem.protoType = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func,
};
