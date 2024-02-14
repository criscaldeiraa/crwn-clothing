import { useNavigate } from 'react-router-dom';

import { DirectoryItemContainer, BackgroundImage, DirectoryItemBody, Titleh2, Text } from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
          <BackgroundImage style={{
            backgroundImage: `url(${imageUrl})`
          }} />
          <DirectoryItemBody>
            <Titleh2>{title}</Titleh2>
            <Text>Shop Now</Text>
          </DirectoryItemBody>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;