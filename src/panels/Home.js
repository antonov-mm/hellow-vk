import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import TabsItem from '@vkontakte/vkui/dist/components/TabsItem/TabsItem';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import HorizontalScroll from '@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Tabs from '@vkontakte/vkui/dist/components/Tabs/Tabs';
import Layout from '@vkontakte/vkui/dist/components/Layout/Layout';
import List from '@vkontakte/vkui/dist/components/List/List';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Промокоды для такси</PanelHeader>
        <Tabs theme="header" type="buttons">
            <HorizontalScroll>
                <TabsItem>
                    Все
                </TabsItem>
                <TabsItem>
                   Яндекс
                </TabsItem>
                <TabsItem>
                   GETT
                </TabsItem>
                <TabsItem>
                  Uber
                </TabsItem>
                <TabsItem>
                  Везёт
                </TabsItem>
                <TabsItem>
                  Ситимобил
                </TabsItem>
            </HorizontalScroll>
        </Tabs>
		{fetchedUser &&
		<Group title="Информация о пользователе">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}
		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Нажми на меня
				</Button>
			</Div>
		</Group>

		<Group title="Второе меню">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Нажми на меня
				</Button>
			</Div>
		</Group>

		<Group title="тест">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="test">
					Test
				</Button>
			</Div>
		</Group>
		<Group title="Информация о приложении" description="">
        <List>
          <Cell>
            <InfoRow title="Последнее обновление">
              14 января 2020
            </InfoRow>
          </Cell>
          <Cell>
            <InfoRow title="Версия приложения">
              0.1 beta
            </InfoRow>
          </Cell>
        </List>
      </Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
